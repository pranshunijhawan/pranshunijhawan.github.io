import { MostProudOfProps } from '../../sections/most-proud-of/MostProudOf';

const mostProudOfProps: MostProudOfProps = {
    sectionTitle: 'Most Proud Of',
    content: [
        {
            id: 1,
            title: 'Polymorphic Self-Mutating Encryption Algorithm',
            content: [
                'Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.',
                'Solve the drawback of traditional Hashing technique to always create a unique hash value with an “Always Unique” based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.'
            ]
        },
        {
            id: 2,
            title: 'Global Dependency Tracer',
            content: [
                'Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.',
                'Architected using .NET Core’s built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls.'
            ]
        },
        {
            id: 3,
            title: 'Dynamic Result Library for IQueryable & IEnumerable Collections',
            content: [
                'Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.',
                'Dynamic Filter: Generate lambda expressions for LINQ’s where extension method to filter data based on defined properties and values.',
                'Dynamic Sort: Generate LINQ’s ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).',
                'Dynamic Select: Generate lambda expressions for LINQ’s select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core’s request cycle.',
                'Fully Compatible for EF Core’s Translations.'
            ]
        }
    ]
}

export default mostProudOfProps;