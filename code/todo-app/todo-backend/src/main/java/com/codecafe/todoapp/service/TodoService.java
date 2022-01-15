package com.codecafe.todoapp.service;

import com.codecafe.todoapp.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();

    private static int idCounter = 0;

    static {
        todos.add(Todo.builder().id(++idCounter).description("Learn Docker").isDone(false).targetDate(new Date()).build());
        todos.add(Todo.builder().id(++idCounter).description("Travel the world").isDone(false).targetDate(new Date()).build());
        todos.add(Todo.builder().id(++idCounter).description("Become very rich!").isDone(false).targetDate(new Date()).build());
    }

    public List<Todo> findAll() {
        return todos;
    }

}
