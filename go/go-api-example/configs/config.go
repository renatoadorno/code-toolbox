package configs

import (
	"fmt"
	"os"

	"github.com/bytedance/sonic"
	"github.com/gofiber/fiber/v2"
	// "github.com/golang-jwt/jwt/v5"
	"github.com/spf13/viper"
)

type Config struct {
	*viper.Viper

	fiber   *fiber.Config
}

func Load() *Config {
	config := &Config{
		Viper: viper.New(),
	}

	// Set default configurations
	config.setDefaults()

	// Select the .env file
	config.SetConfigName(".env")
	config.SetConfigType("dotenv")
	config.AddConfigPath(".")

	// Automatically refresh environment variables
	config.AutomaticEnv()

	// Read configuration
	if err := config.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); !ok {
			fmt.Println("failed to read configuration:", err.Error())
			os.Exit(1)
		}
	}

	config.setFiberConfig()

	return config
}

func (config *Config) setDefaults() {
	config.SetDefault("APP_ADDR", ":8080")
	config.SetDefault("APP_ENV", "local")

	// Set default database configuration
	config.SetDefault("DB_DRIVER", "mysql")
	config.SetDefault("DB_HOST", "localhost")
	config.SetDefault("DB_USERNAME", "fiber")
	config.SetDefault("DB_PASSWORD", "password")
	config.SetDefault("DB_PORT", 3306)
	config.SetDefault("DB_DATABASE", "boilerplate")

	config.SetDefault("JWT_SECRET", "!!SECRET!!")
}

func (config *Config) setFiberConfig() {
	config.fiber = &fiber.Config{
		JSONEncoder: sonic.Marshal,
		JSONDecoder: sonic.Unmarshal,
	}
}

func (config *Config) GetFiberConfig() *fiber.Config {
	return config.fiber
}