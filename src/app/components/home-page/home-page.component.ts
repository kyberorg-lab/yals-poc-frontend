import {Component, OnInit} from '@angular/core';
import {StubMessage} from '../../classes/stubMessage';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
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
