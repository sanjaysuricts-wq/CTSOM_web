declare module 'react-simple-maps' {
  import { ComponentType, CSSProperties, ReactNode } from 'react'

  interface ProjectionConfig {
    center?: [number, number]
    scale?: number
    rotate?: [number, number, number]
  }

  interface ComposableMapProps {
    projection?: string
    projectionConfig?: ProjectionConfig
    width?: number
    height?: number
    style?: CSSProperties
    children?: ReactNode
  }

  interface GeographiesChildrenArgs {
    geographies: Array<{
      rsmKey: string
      id?: string
      properties: Record<string, unknown>
      [key: string]: unknown
    }>
  }

  interface GeographiesProps {
    geography: string | Record<string, unknown>
    children: (args: GeographiesChildrenArgs) => ReactNode
  }

  interface GeographyStyleState {
    outline?: string
    fill?: string
    stroke?: string
    strokeWidth?: number
    [key: string]: unknown
  }

  interface GeographyProps {
    geography: Record<string, unknown>
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: {
      default?: GeographyStyleState
      hover?: GeographyStyleState
      pressed?: GeographyStyleState
    }
    [key: string]: unknown
  }

  interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
    [key: string]: unknown
  }

  interface GraticuleProps {
    stroke?: string
    strokeWidth?: number
    step?: [number, number]
    [key: string]: unknown
  }

  interface ZoomableGroupProps {
    center?: [number, number]
    zoom?: number
    children?: ReactNode
    [key: string]: unknown
  }

  export const ComposableMap: ComponentType<ComposableMapProps>
  export const Geographies: ComponentType<GeographiesProps>
  export const Geography: ComponentType<GeographyProps>
  export const Marker: ComponentType<MarkerProps>
  export const Graticule: ComponentType<GraticuleProps>
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>
}
