import Item from "../Item.js";

class ItemService {
    async create(item) {
        try {
            return await Item.create(item)
        } catch (e) {
            throw new Error('Create Error!')
        }
    }

    async getAll(items) {
        try {
            return await Item.find()
        } catch (e) {
            throw new Error('Get Error!')
        }
    }

    async getOne(id) {
        try {
            if (!id) {
                new Error('Id Error!')
            }
            return await Item.findById(id)
        } catch (e) {
            throw new Error('Get Error!')
        }
    }

    async update(item) {
        try {
            return await Item.findByIdAndUpdate(item._id, item, {new:true})
        } catch (e) {
            throw new Error('Update Error!')
        }
    }

    async delete(id) {
        try {
            return await Item.findOneAndDelete(id)
        } catch (e) {
            throw new Error('Delete Error!')
        }
    }
}

export default new ItemService();