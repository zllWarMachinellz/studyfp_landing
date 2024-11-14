

export interface Course{
    id: string
    img: string
    codigo: string
    name: string
    hours: number
    init_date: Date
    end_date: Date
    requirements: string[]
    estado: boolean
}