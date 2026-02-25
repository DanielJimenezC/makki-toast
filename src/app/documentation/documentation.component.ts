import { Component } from "@angular/core";
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastService } from "makki-toast";
import { NoDataComponent } from "../promise/PromiseNotData";
import { WithDataComponent } from "../promise/PromiseData";


@Component({
  selector: 'app-documentation',
  imports: [HighlightAuto, HighlightLineNumbers, RouterLink, CommonModule],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent {
  installationCode = `npm i makki-toast`
  importAppTsCode = `import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ToasterComponent } from 'makki-toast'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToasterComponent],
  templateUrl: './app.html'
})
export class App {}`
  importAppHtmlCode = `<app-toaster></app-toaster>
<router-outlet></router-outlet>`
  importComponentServiceCode = `import { Component } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ToastService } from 'makki-toast'

@Component({
  selector: 'app-your-component',
  imports: [CommonModule],
  templateUrl: './your-component.component.html',
  styleUrl: './your-component.component.css'
})
export class YourComponent {
  constructor(
    private readonly toastService: ToastService,
  ) {}
}`
  infoToastCode = `this.toastService.info({
  title: 'Info Title',
  description: 'Info description - Lorem ipsum'
})`
  successToastCode = `this.toastService.success({
  title: 'Success Title',
  description: 'Success description - Lorem ipsum'
})`
  warningToastCode = `this.toastService.warning({
  title: 'Warning Title',
  description: 'Warning description - Lorem ipsum'
})`
  errorToastCode = `this.toastService.error({
  title: 'Error Title',
  description: 'Error description - Lorem ipsum'
})`
  actionToastCode = `this.toastService.action({
  title: 'Action Title',
  description: 'Action description - Lorem ipsum',
  button: {
    title: 'Click Action',
    onClick: () => { alert('Click on action button!') }
  }
})`
  promiseSimpleCode = `this.toastService.promise(
  this.simulateApiCall(),
  {
    loading: {
      title: 'Processing ...',
      description: 'Please wait'
    },
    success: (data: any) => ({
      title: 'Confirmed',
      description: 'promise complete message',
      button: {
        title: 'Click Action',
        onClick: () => { alert('Click on action button!') }
      }
    }),
    error: (err) => ({
      title: 'Promise Failed',
      description: err.message
    })
  }
)`
  promiseComponentNoData = `this.toastService.promise(
  this.simulateApiCall(),
  {
    loading: {
      title: 'Processing ...',
      description: 'Please wait'
    },
    success: () => ({
      title: 'Finished',
      description: NoDataComponent,
      button: {
        title: 'Click Action',
        onClick: () => { alert('Click on action button!') }
      }
    }),
    error: (err) => ({
      title: 'Promise Failed',
      description: err.message
    })
  }
)`
  promiseComponentWithData = `this.toastService.promise(
  this.simulateApiCall(),
  {
    loading: {
      title: 'Processing Booking...',
      description: 'Please wait'
    },
    success: (data: any) => ({
      title: 'Booking Confirmed',
      description: {
        component: WithDataComponent,
        inputs: {
          data: data
        }
      },
      button: {
        title: 'View Details',
        onClick: () => { alert('Click on action button!') }
      },
      styles: {
        title: 'color: #10b981; font-weight: 600;',
        button: 'background: #10b981; color: white;'
      }
    }),
    error: (err) => ({
      title: 'Booking Failed',
      description: err.message 
    })
  }
)`
  dataReception = `import { Component, Input } from '@angular/core'

@Component({
  standalone: true,
  templateUrl: './template.component.html'
})
export class WithDataComponent {
  @Input() data!: any;
}
  `
  toastPosition = `this.toastService.success({
  title: 'Success Title',
  description: 'Success description - Lorem ipsum',
  position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' 
})`

  isActive: boolean = false;

  constructor(
    private readonly clipboard: Clipboard,
    private readonly toastService: ToastService
  ) {}

  setIsActive(value: boolean) {
    this.isActive = value;
  }

  handleCopyClipboard(textCopy: string) {
    const success = this.clipboard.copy(textCopy);
    if (success) {
      this.toastService.success({
        title: 'Copy Success',
        description: 'Copy to clipboard'
      })
    } else {
      this.toastService.error({
        title: 'Error',
        description: 'Copy to clipboard failed'
      })
    }
  }

  handleInfoToast(): void {
    this.toastService.info({
      title: 'Info Title',
      description: 'Info description - Lorem ipsum'
    })
  }

  handleSuccessToast(): void {
    this.toastService.success({
      title: 'Success Title',
      description: 'Success description - Lorem ipsum'
    })
  }

  handleWarningToast(): void {
    this.toastService.warning({
      title: 'Warning Title',
      description: 'Warning description - Lorem ipsum'
    })
  }

  handleErrorToast(): void {
    this.toastService.error({
      title: 'Error Title',
      description: 'Error description - Lorem ipsum'
    })
  }

  handleActionToast(): void {
    this.toastService.action({
      title: 'Action Title',
      description: 'Action description - Lorem ipsum',
      button: {
        title: 'Click Action',
        onClick: () => { alert('Click on action button!') }
      }
    })
  }

  handlePromiseSimpleToast(): void {
    this.toastService.promise(
      this.simulateApiCall(),
      {
        loading: {
          title: 'Processing ...',
          description: 'Please wait'
        },
        success: (data: any) => ({
          title: 'Confirmed',
          description: 'promise complete message',
          button: {
            title: 'Click Action',
            onClick: () => { alert('Click on action button!') }
          }
        }),
        error: (err) => ({
          title: 'Promise Failed',
          description: err.message
        })
      }
    );
  }

  handlePromiseComponentNoDataToast(): void {
    this.toastService.promise(
      this.simulateApiCall(),
      {
        loading: {
          title: 'Processing ...',
          description: 'Please wait'
        },
        success: () => ({
          title: 'Finished',
          description: NoDataComponent,
          button: {
            title: 'Click Action',
            onClick: () => { alert('Click on action button!') }
          }
        }),
        error: (err) => ({
          title: 'Promise Failed',
          description: err.message
        })
      }
    )
  }

  handlePromiseComponentDataToast(): void {
    this.toastService.promise(
      this.simulateApiCall(),
      {
        loading: {
          title: 'Processing Booking...',
          description: 'Please wait'
        },
        success: (data: any) => ({
          title: 'Booking Confirmed',
          description: {
            component: WithDataComponent,
            inputs: {
              data: data
            }
          },
          button: {
            title: 'View Details',
            onClick: () => { alert('Click on action button!') }
          },
          styles: {
            title: 'color: #10b981; font-weight: 600;',
            button: 'background: #10b981; color: white;'
          }
        }),
        error: (err) => ({
          title: 'Booking Failed',
          description: err.message 
        })
      }
    )
  }

  simulateApiCall(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        resolve('Data from fake API');
      }, 2000);
    });
  }

  handleTopLeftToast(): void {
    this.toastService.success({
      title: 'Success Title',
      description: 'Success description - Lorem ipsum',
      position: 'top-left'
    })
  }

  handleTopCenterToast(): void {
    this.toastService.success({
      title: 'Success Title',
      description: 'Success description - Lorem ipsum',
      position: 'top-center'
    })
  }

  handleTopRightToast(): void {
    this.toastService.success({
      title: 'Success Title',
      description: 'Success description - Lorem ipsum',
      position: 'top-right'
    })
  }

  handleBottomLeftToast(): void {
    this.toastService.success({
      title: 'Success Title',
      description: 'Success description - Lorem ipsum',
      position: 'bottom-left'
    })
  }

  handleBottomCenterToast(): void {
    this.toastService.success({
      title: 'Success Title',
      description: 'Success description - Lorem ipsum',
      position: 'bottom-center'
    })
  }

  handleBottomRightToast(): void {
    this.toastService.success({
      title: 'Success Title',
      description: 'Success description - Lorem ipsum',
      position: 'bottom-right' 
    })
  }
}