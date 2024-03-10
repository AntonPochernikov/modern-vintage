// Type definitions for classnames
// Project: https://github.com/JedWatson/classnames

declare type ClassValue = string | number | ClassDictionary | ClassArray

interface ClassDictionary {
  [id: string]: boolean
}

interface ClassArray extends Array<ClassValue> {}

interface ClassNamesFn {
  (...classes: ClassValue[]): string
}

declare let classNames: ClassNamesFn

declare module 'classnames' {
  export = classNames
}
