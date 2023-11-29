export const lightenDarkenColor = (hex: string, factor: number) => {
	hex = hex.replace(/^#/, '')

	// Parse the hexadecimal color code into its red, green, and blue components
	const r = parseInt(hex.slice(0, 2), 16)
	const g = parseInt(hex.slice(2, 4), 16)
	const b = parseInt(hex.slice(4, 6), 16)

	// Calculate the darkened color components
	const darkenedR = Math.max(0, Math.floor(r * (1 - factor)))
	const darkenedG = Math.max(0, Math.floor(g * (1 - factor)))
	const darkenedB = Math.max(0, Math.floor(b * (1 - factor)))

	// Convert the darkened components back to hexadecimal
	const darkenedHex = (
		darkenedR.toString(16).padStart(2, '0') +
		darkenedG.toString(16).padStart(2, '0') +
		darkenedB.toString(16).padStart(2, '0')
	)

	return `#${darkenedHex}`
}