import { ItemIdModel } from './item-id-model';
import { SnippetModel } from './snippet-model';

export interface VideoItemModel {
  kind: string;
  etag: string;
  id: ItemIdModel;
  snippet: SnippetModel;
}
