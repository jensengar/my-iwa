import { InitService } from './init.service';

export function initializeInitService(initService: InitService): () => void {
  return () => initService.init();
}