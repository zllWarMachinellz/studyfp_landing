
export interface course {
    id: string
    img: string
    codigo: string
    name: string
    hours: number
    entidad_subvencion: string
    init_date: Date
    end_date: Date
    requirements: string[]
    estado: boolean
}