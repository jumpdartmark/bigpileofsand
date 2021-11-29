import React from 'react';
import Icon from '@ant-design/icons';

export type Book = {
  id : string,
  title : string,
  year : string,
  author : string | string[],
  wiki_url : string,
};

export type Quote = {
  id : string,
  quote : string,
};

export type RouteMap = {
  element: React.FC,
  route: string,
  title: string,
  description: string,
  icon: typeof Icon,
};
