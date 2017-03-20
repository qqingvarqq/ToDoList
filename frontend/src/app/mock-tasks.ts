/*
    Sample task list for testing our view
*/
import { Task } from './task';
export const TASKS: Task[] = [
    new Task("task1", "description1", new Date("01.08.2017"), true),
    new Task("task2", "description2", new Date("02.08.2017"), false),
    new Task("task3", "description3", new Date("03.08.2017"), true),
    new Task("task4", "description4", new Date("04.08.2017"), true),
    new Task("task5", "description5", new Date("05.08.2017"), true),
    new Task("task6", "description6", new Date("06.08.2017"), false),
    new Task("task7", "description7", new Date("07.08.2017"), false),
    new Task("task8", "description8", new Date("08.08.2017"), true),
]