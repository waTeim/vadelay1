import express from 'express';
import { RouterBase, router } from 'ts-api';

/**
 * title: Vandelay Industries API - DRAFT
 *  description: [Vandelay Industries](http://www.urbandictionary.com/define.php?term=Vandelay) is a
 *    vertically integrated chemical manufaturing, import/export, and sales
 *    enterprise headquartered in the Upper West Side, NYC. It was founded by Art
 *    Vandely in 1990.
 * 
 * 
 *    It is known both for the quality of its product as well as its aggressive
 *    salesperson recruiting program.
 * 
 * 
 *    The Vandelay Industries API platform, documented here, represents a unified
 *    view of its ERP and CRM systems for use by both internal applications and
 *    3rd-party strategic partner system integrations.
 */
@router('/')
export class Router extends RouterBase {
  constructor(context:any) {
    super(context);
    require('../__routes')(this);
  }
}

