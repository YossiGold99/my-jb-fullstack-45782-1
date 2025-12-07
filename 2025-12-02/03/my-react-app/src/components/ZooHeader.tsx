type Props = {
    title: string
    subtitle?: string
}

export default function ZooHeader({ title, subtitle }: Props) {
    return (
        <header className="zoo-header">
            <div className="zoo-header-inner">
                <h1>{title}</h1>
                {subtitle && <p className="subtitle">{subtitle}</p>}
            </div>
        </header>
    )
}
