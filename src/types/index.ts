import React from 'react';
import Icon from '@ant-design/icons';

export type Book = {
  id : string,
  title : string,
  year : string,
  author : string,
  wiki_url : string,
};

export type RouteMap = {
  element: React.FC,
  route: string,
  title: string,
  description: string,
  icon: typeof Icon,
};
