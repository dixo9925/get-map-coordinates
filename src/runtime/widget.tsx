import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

const Widget = (props: AllWidgetProps<any>) => {
  const { useState } = React
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')

  return 
  <div className="widget_starter jimu-widget"> {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
    <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
  )}
  </div>
}

export default Widget
