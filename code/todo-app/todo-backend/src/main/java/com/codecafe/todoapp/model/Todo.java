package com.codecafe.todoapp.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Todo {

    private long id;
    private String description;
    private boolean isDone;
    private Date targetDate;

}
