package me.pluse.apigateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsConfigurationSource;

import java.util.Collections;
//import org.springframework.web.reactive.config.EnableWebFlux;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http
                .csrf(csrf -> csrf.disable()) // Proper way to disable CSRF in newer Spring Security versions
                .authorizeExchange(exchanges -> exchanges
                        .pathMatchers("/api/**").permitAll()  // Allow all requests to '/api/**'
                        .anyExchange().authenticated()  // All other requests must be authenticated
                )
                .cors(cors -> cors.configurationSource(corsConfigurationSource()));  // Use the custom CORS configuration

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowedOrigins(Collections.singletonList("http://localhost:3000")); // Allow frontend domain
        corsConfig.setAllowedMethods(Collections.singletonList("*"));  // Allow all methods
        corsConfig.setAllowedHeaders(Collections.singletonList("*"));  // Allow all headers
        corsConfig.setAllowCredentials(true);  // Allow credentials

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);  // Apply CORS settings to all paths
        return (CorsConfigurationSource) source;
    }
}