import { DynamicModule, FactoryProvider, ModuleMetadata } from '@nestjs/common';
type PantherOptions = {
    url: string;
};
type PantherModuleOptions = {
    connectionOptions: PantherOptions;
};
type PantherModuleAsyncOptions = {
    useFactory: (...args: any[]) => Promise<PantherModuleOptions> | PantherModuleOptions;
} & Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider, 'inject'>;
export declare class PantherModule {
    static registerAsync({ useFactory, imports, inject, }: PantherModuleAsyncOptions): Promise<DynamicModule>;
}
export {};
