const ToDO = ({ id, createdAt}) =>
{
    return(
    <tr>
        <td>
            <label> {id} </label>
        </td>
        <td>
            <input/>
        </td>
        <td>
            <label> {createdAt} </label>
        </td>
    </tr>);
}

export { ToDO }

