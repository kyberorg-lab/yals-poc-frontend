import { Component, OnInit } from '@angular/core';
import {StubMessage} from '../../stubMessage';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  stubMessage: StubMessage;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getStubMessage().subscribe((data: StubMessage) => {
      console.log(data);
      this.stubMessage = data;
    });
  }

}
