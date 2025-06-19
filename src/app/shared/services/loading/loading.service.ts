import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private controlLoading: WritableSignal<boolean> = signal(false);
  public loading: Signal<boolean> = computed(() => this.controlLoading());

  constructor() { }

  setControlLoading(value: boolean){
    this.controlLoading.set(value);
  }
}
