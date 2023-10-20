/// <reference types="@types/google-publisher-tag" />

export type Size = googletag.GeneralSize

export type HooksKeys = keyof googletag.events.EventTypeMap

export type IHooksCallbackMap<T extends HooksKeys> = {
  [K in T]?: (evt: googletag.events.EventTypeMap[K]) => void
}

export type KeyValue = Record<string, string | string[]>
export interface IConfig {
    networkCode?: number,
    keyValue?: KeyValue,
    pageUrl?: string,
    size?: Size,
    disabled?: boolean,
    hooks?: IHooksCallbackMap<HooksKeys>
}


export type HooksEvent = googletag.events.SlotRenderEndedEvent | googletag.events.ImpressionViewableEvent

export interface IHooksCallbackItem<T extends HooksKeys> {
    (event: googletag.events.EventTypeMap[T]): void
}

export interface IHooksCallbackFunc<T extends HooksKeys> {
    (event: googletag.events.EventTypeMap[T]): void
}

export type GlobalHooksCallbackMap<T extends HooksKeys> = Record<string, IHooksCallbackMap<T>>

export enum ELogType {
    hooks = 'hooks',
    console = 'console',
    loadScript = 'loadScript'
}
export enum ELoStatus {
    log = 'log',
    error = 'error',
    success = 'success'
}
export interface ILogItem  {
    type?: ELogType;
    status?: ELoStatus,
    title: string;
    desc?: string;
}

export type LogList = ILogItem[]

export type AdUnitConfigValue =  {
    adUnit: string;
    autoRefresh?: boolean;
    lazy?: boolean;
    sponsor?: AdUnitConfigValue;
    passback?: AdUnitConfigValue;
} & IConfig
export type AdUnitConfig = {
    [key: string]: AdUnitConfigValue
}
