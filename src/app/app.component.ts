import {Component, OnInit} from '@angular/core';
import {StubMessage} from './stubMessage';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stubMessage: StubMessage;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getStubMessage().subscribe((data: StubMessage) => {
      console.log(data);
      this.stubMessage = data;
    });
  }
}
