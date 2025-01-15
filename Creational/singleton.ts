/*
    Singleton Pattern
    Ensures a class has only one instance.
    Provides a global point of access to it.
    Usually lazy loaded, created only when needed.

    Example: a configuration object or the application logger.
*/

class Logger {
    private static singleInstance: Logger;

    // 🔐 The constructor must be private in order to avoid new instances of Logger!
    private constructor() {}

    public static getInstance() : Logger {
        if (!Logger.singleInstance) {
            Logger.singleInstance = new Logger();
        }

        return Logger.singleInstance;
    }
}

const logger = Logger.getInstance();
const otherLogger = Logger.getInstance();
console.log(logger === otherLogger); // ✅ Output: true, it is exactly the same instance

const newLogger = new Logger(); // 🚨 Error, you can't create a new Logger instance!

// From this moment, you should access the logger ONLY using Logger.getInstance().
