import { CreateUserDTO } from "src/user/dto/user.dto";

export function dataAdjust(data: any) {
    if (data.login == null)
        data.login = ""

    if (data.id == null)
        data.id = ""

    if (data.node_id == null)
        data.node_id = ""

    if (data.name == null)
        data.name = ""

    if (data.html_url == null)
        data.html_url = ""

    if (data.repos_url == null)
        data.repos_url = ""

    if (data.created_at == null)
        data.created_at = ""

    if (data.updated_at == null)
        data.updated_at = ""

    if (data.email == null)
        data.email = ""

    return data
}