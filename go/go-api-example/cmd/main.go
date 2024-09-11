package main

import (
	"os"
	"os/signal"
	"renattoadorno/toolbox/go-api-example/configs"
	"renattoadorno/toolbox/go-api-example/app/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	config :=  configs.Load()

	app := fiber.New(*config.GetFiberConfig())

	app.Route("/api", routes.Api, "api.")

	// Close any connections on interrupt signal
	channel := make(chan os.Signal, 1)
	
	signal.Notify(channel, os.Interrupt)
	go func() {
		<-channel
		app.Shutdown()
	}()

	// Start listening on the specified address
	app.Listen(config.GetString("APP_ADDR"))
}