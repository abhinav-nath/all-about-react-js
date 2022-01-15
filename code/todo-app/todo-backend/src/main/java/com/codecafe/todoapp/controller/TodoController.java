package com.codecafe.todoapp.controller;

import com.codecafe.todoapp.model.Todo;
import com.codecafe.todoapp.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin("http://localhost:8800")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable long id) {
        Todo todo = todoService.deleteById(id);

        if (todo != null)
            return ResponseEntity.noContent().build();

        return ResponseEntity.notFound().build();
    }

}