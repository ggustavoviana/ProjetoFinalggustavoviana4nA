import UserRepository from '../repositories/userRepository';

const UserService = {
    async getAllUsers() {
        return await UserRepository.getAllUsers();
    },

    async createUser(data: any) {
        return await UserRepository.createUser(data);
    },

    async updateUser(id: string, data: any) {
        return await UserRepository.updateUser(id, data);
    },

    async deleteUser(id: string) {
        return await UserRepository.deleteUser(id);
    },
};

export default UserService;
