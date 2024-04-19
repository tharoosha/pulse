package me.pluse.mediaservice.controller;

import me.pluse.mediaservice.dto.MediaResponse;
import me.pluse.mediaservice.model.Media;
import me.pluse.mediaservice.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/media")
public class MediaController {

    @Autowired
    MediaService mediaService;

    @PostMapping("/fileupload")
    public ResponseEntity<MediaResponse> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        MediaResponse mediaResponse = mediaService.fileUpload(file);
        return ResponseEntity.ok(mediaResponse);
    }

    @GetMapping("/filedownload/{id}")
    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String id) {
        Media media = mediaService.getFile(id);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(media.getContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + "\"")
                .body(new ByteArrayResource(media.getData()));
    }
}
