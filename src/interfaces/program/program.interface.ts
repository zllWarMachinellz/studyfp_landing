
export interface course {
    id: string
    img: string
    codigo: string
    name: string
    hours: number
    entidad_subvencion: string
    init_date: Date | string
    end_date: Date | string
    requirements: string[]
    estado: boolean
}