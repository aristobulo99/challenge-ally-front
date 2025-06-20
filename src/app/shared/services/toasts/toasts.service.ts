import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ToastsContent } from '../../interfaces/tosts.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  private controlToasts: WritableSignal<ToastsContent | undefined> = signal(undefined);
  public toasts: Signal<ToastsContent | undefined> = computed(() => this.controlToasts());

  constructor() { }

  setControlToasts(value: ToastsContent | undefined){
    this.controlToasts.set(value);
    if(value){
      setTimeout(
      () => {
        this.controlToasts.set(undefined);
      }, value.duration
    )
    }
  }
}
