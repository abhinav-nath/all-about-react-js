package com.codecafe.todoapp.model;

import lombok.*;

import java.util.Date;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Todo {

    private long id;
    private String description;
    private boolean isDone;
    private Date targetDate;

}
