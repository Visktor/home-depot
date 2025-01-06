import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { Button, ButtonProps } from '@nextui-org/react'

function IconButton({
    icon,
    slotProps,
}: {
    icon: IconProp
    slotProps?: {
        Button?: Partial<ButtonProps>
        Icon?: Partial<FontAwesomeIconProps>
    }
}) {
    return (
        <Button
            variant="light"
            size="sm"
            className="w-min rounded-full"
            {...slotProps?.Button}
        >
            <FontAwesomeIcon size="lg" icon={icon} {...slotProps?.Icon} />
        </Button>
    )
}

export { IconButton }
