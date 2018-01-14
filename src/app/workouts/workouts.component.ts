import { Component } from '@angular/core';
import { WORKOUTS } from './workouts-mock';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Workout } from './workout';
import { FormsModule  } from '@angular/forms';

@Component({
    selector: 'workouts-component',
    templateUrl: './workouts.component.html',
   // styleUrls: ['./workouts.component.css']
  })
  
  export class WorkoutComponent implements OnInit {

    workouts = WORKOUTS;
    selectedWorkout : Workout;
    show: boolean;


    constructor() {}
    ngOnInit()
    {
        this.selectedWorkout = WORKOUTS[0];
    }

    onSelect(workout : Workout)
    {
        this.selectedWorkout = workout;
    }

  }