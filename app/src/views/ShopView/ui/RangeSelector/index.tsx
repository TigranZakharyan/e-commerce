// @ts-ignore
import ReactSlider, { ReactSliderProps } from 'react-slider'
import cn from 'classnames'

export function RangeSlider<T extends number | readonly number[]>(
	_props: ReactSliderProps<T>
) {
	const isVertical = false
	return (
		<ReactSlider
			{..._props}
			renderThumb={(props: any, state: {
                valueNow: string
            }) => (
				<div
					{...props}
					className={cn({
						'h-full': !isVertical,
						'w-full': isVertical,
						'aspect-square rounded-full bg-indigo-500 text-sm text-white flex items-center justify-center cursor-grab outline-0':
                            true,
					})}
				>
					{state.valueNow}{_props?.additionalText}
				</div>
			)}
			renderTrack={(props: any, state: {
                value: string | any[];
                index: number
            }) => {
				const points = Array.isArray(state.value) ? state.value.length : null
				const isMulti = points && points > 0
				const isLast = isMulti ? state.index === points : state.index === 1
				const isFirst = state.index === 0
				return (
					<div
						{...props}
						className={cn({
							'h-1/4 top-1/2 -translate-y-1/2': !isVertical,
							'w-1/4 left-1/2 -translate-x-1/2': isVertical,
							'rounded-full': true,
							'bg-gray-400': isMulti ? isFirst || isLast : isLast,
							'bg-gray-200': isMulti ? !isFirst || !isLast : isFirst,
						})}
					></div>
				)
			}}
		/>
	)
}