import { User } from '../models/userModel';  // Certifique-se de que o caminho está correto

const UserRepository = {
    async getAllUsers() {
        return await User.findAll();
    },

    async createUser(data: any) {
        return await User.create(data);
    },

    async updateUser(id: string, data: any) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('Usuário não encontrado');
        return await user.update(data);
    },

    async deleteUser(id: string) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('Usuário não encontrado');
        return await user.destroy();
    },
};

export default UserRepository;
