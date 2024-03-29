import DropMenu from "@/components/DropMenu";

export default function DataRow({ usuario }) {
    return (
        <tr>
            <td className="px-6">{usuario.id}</td>
            <td className="px-6">{usuario.nome}</td>
            <td className="px-6">{usuario.cpf}</td>
            <td className="px-6">{usuario.cep}</td>
            <td className="px-6">{usuario.dataNascimento[2]}/{usuario.dataNascimento[1]}/{usuario.dataNascimento[0]}</td>
            <td className="px-6">{usuario.genero}</td>
            <DropMenu />
        </tr>
    )
}
