import type { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './Table.module.scss'

const Root = ({ className, ...rest }: ComponentPropsWithoutRef<'table'>) => {
  const classes = clsx(s.root, className)

  return <table className={classes} {...rest} />
}

const Head = ({ className, ...rest }: ComponentPropsWithoutRef<'thead'>) => {
  const classes = clsx(s.head, className)

  return <thead className={classes} {...rest} />
}

const HeadCell = ({ className, ...rest }: ComponentPropsWithoutRef<'th'>) => {
  const classes = clsx(s.headCell, className)

  return <th className={classes} {...rest} />
}

const Body = ({ className, ...rest }: ComponentPropsWithoutRef<'tbody'>) => {
  const classes = clsx(s.body, className)

  return <tbody className={classes} {...rest} />
}

const Row = ({ className, ...rest }: ComponentPropsWithoutRef<'tr'>) => {
  const classes = clsx(s.row, className)

  return <tr className={classes} {...rest} />
}

const Cell = ({ className, ...rest }: ComponentPropsWithoutRef<'td'>) => {
  const classes = clsx(s.cell, className)

  return <td className={classes} {...rest} />
}

export const Table = { Body, Cell, Head, HeadCell, Root, Row }
