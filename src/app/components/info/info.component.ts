import {Component, OnInit} from '@angular/core';
import {StubMessage} from '../../classes/stubMessage';
import {MessageService} from '../../services/message.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  apiLocation: string;
  apiState: string;
  apiIsAlive: boolean;

  constructor(private messageService: MessageService) {
    this.apiLocation = environment.apiRoot;
  }

  ngOnInit(): void {
    this.messageService.getStubMessage().subscribe((data: StubMessage) => {
      this.apiIsAlive = (data != null && data.message.trim().length > 0);
      this.apiState = this.apiIsAlive ? 'Connected' : 'Disconnected';
    });
    this.apiState = this.apiIsAlive ? 'Connected' : 'Disconnected';
  }

}
