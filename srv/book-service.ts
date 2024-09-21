import cds from '@sap/cds';
import { Request, Service } from '@sap/cds';

export default ( srv: Service ) => {
    srv.before('CREATE', 'Books', async (req: Request) => {
        console.log('Before creating Books');
        const { Books } = await import('#cds-models/sap/capire/bookshop');
      });
    
      srv.on('someAction', async (req: Request) => {
        console.log('Start someAction');
        console.log('req.data', req.data);
        let bookID = req.data.ID;
        const { Books } = cds.entities('sap.capire.bookshop');
        const books = await SELECT.from(Books).where({ 'ID': bookID });
        return books ? 'S' : 'E';
      });
};