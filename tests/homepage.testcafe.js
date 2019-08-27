import { Selector } from 'testcafe';

fixture `HomePage`
    .page `https://google.com`;

test('ToBe_Failure_Test', async t => {
    await t
        .expect(Selector('a').withText('About').textContent).notContains("About");
});

test('ToBe_Passed_Test', async t => {
    await t
        .expect(Selector('a').withText('About').textContent).contains("About");
});

test('ToBe_Passed_Test2', async t => {
    await t
        .expect(Selector('a').withText('Store').textContent).notContains("Store 123");
});

test('ToBE_Failed_Test2', async t => {
    await t
        .expect(Selector('a').withText('Store').textContent).contains("Store 123");
});