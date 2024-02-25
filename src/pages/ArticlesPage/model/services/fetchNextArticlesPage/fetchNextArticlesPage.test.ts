// import { TestAsyncFunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncFunk';
// import { ArticleView } from 'entities/Article';
// import { ArticleSortField } from 'entities/Article/model/types/article';
// import { fetchNextArticlesPage } from './fetchNextArticlesPage';
// import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
//
// jest.mock('../fetchArticleList/fetchArticleList');
// describe('fetchNextArticlesPage.test', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncFunk(fetchNextArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//                 view: ArticleView.BIG,
//                 _inited: true,
//                 order: 'asc',
//                 sort: ArticleSortField.CREATED,
//                 search: '',
//                 error: undefined,
//
//             },
//         });
//
//         const result = await thunk.callThunk();
//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 });
//     });
//     test('fetchArticlesList not callde', async () => {
//         const thunk = new TestAsyncFunk(fetchNextArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: false,
//                 view: ArticleView.BIG,
//                 _inited: true,
//                 order: 'asc',
//                 sort: ArticleSortField.CREATED,
//                 search: '',
//                 error: undefined,
//             },
//         });
//
//         const result = await thunk.callThunk();
//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(fetchArticleList).not.toHaveBeenCalled();
//     });
// });
