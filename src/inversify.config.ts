import { Container } from 'inversify';
import { CategoryController } from "./controllers/categoryController";
import { CategoryRepository } from "./repositories/categoryRepository";
import { ItemController } from "./controllers/itemController";
import { ItemRepository } from "./repositories/itemRepository";



const container = new Container();

container.bind<CategoryController>(CategoryController).to(CategoryController);
container.bind<CategoryRepository>('CategoryRepository').to(CategoryRepository);

container.bind<ItemController>(ItemController).to(ItemController);
container.bind<ItemRepository>('ItemRepository').to(ItemRepository);


export { container };