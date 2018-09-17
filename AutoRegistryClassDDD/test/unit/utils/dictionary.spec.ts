import {describe, it} from "mocha"
import { expect} from 'chai';
import Dictionary from '../../../App/utils/dictionary-helper';

describe("dictionary-helper", () => {
    let dic = new Dictionary<number>([])
    describe("Add", () => {
        it("Should add success", () => {
            expect(3).to.equal(3);
        });
    })
});