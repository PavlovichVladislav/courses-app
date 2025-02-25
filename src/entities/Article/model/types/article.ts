import { User } from 'entities/User';

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE'
}

export interface ArticleBaseBlock {
  id: number;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBaseBlock {
  type: ArticleBlockType.IMAGE;
  title?: string;
  src: string;
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
  type: ArticleBlockType.CODE;
  code: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
  GRID = 'grid',
  LIST = 'list'
}

export interface Article {
  id: number,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  user: User,
  createdAt: string,
  type: ArticleType[],
  blocks: ArticleBlock[] | []
}
