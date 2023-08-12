export enum Event {
  sidebarClose = 'sidebar::close',
  sidebarOpen = 'sidebar::open',
  viewChange = 'view::change',
}

export interface ViewChangeEvent {
  view: string
}

type EventData = void | ViewChangeEvent

class EventBus {
  private listeners: { [key: string]: Array<(data: EventData) => void> } = {}

  on(event: Event, callback: (data: EventData) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  emit(event: Event, data?: EventData) {
    if (!this.listeners[event]) { return }

    this.listeners[event].forEach((callback) => callback(data))
  }
}

export const global = new EventBus()