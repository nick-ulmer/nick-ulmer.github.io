import { useId } from 'react'
import SvgIcon from '@mui/material/SvgIcon'

export default function F1Icon(props) {
    const maskId = useId()

    return (
        <SvgIcon {...props} viewBox="0 0 24 24">
            <defs>
                <mask id={maskId}>
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="white" />
                    <text
                        x="12"
                        y="12"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="monospace"
                        fill="black"
                    >
                        F1
                    </text>
                </mask>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" mask={`url(#${maskId})`} />
        </SvgIcon>
    )
}
