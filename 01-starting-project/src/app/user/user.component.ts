import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>()
  select = output<string>();

  // @Output() select = new EventEmitter();

  imagePath = computed(() => 'assets/users/' + this.user().avatar)

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
