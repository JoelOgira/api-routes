import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
    params: {
        id: string
    }
}

export async function GET({ params: { id } }: Props) {

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

    const todo: Todo = await res.json()

    if (!todo.id) return NextResponse.json({ "message": "Todo not found" })

    return NextResponse.json(todo)
}

export async function PUT(request: Request) {
    const { }: Todo = await request.json()
}